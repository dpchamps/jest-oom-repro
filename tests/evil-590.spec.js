
  describe("some-evil-spec=590", () => {
    it("evil-block-590", () => {
      window.evil_590 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  