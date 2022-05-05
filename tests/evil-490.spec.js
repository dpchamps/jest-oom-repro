
  describe("some-evil-spec=490", () => {
    it("evil-block-490", () => {
      window.evil_490 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  