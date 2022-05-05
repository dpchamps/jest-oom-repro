
  describe("some-evil-spec=200", () => {
    it("evil-block-200", () => {
      window.evil_200 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  