
  describe("some-evil-spec=646", () => {
    it("evil-block-646", () => {
      window.evil_646 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  