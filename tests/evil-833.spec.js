
  describe("some-evil-spec=833", () => {
    it("evil-block-833", () => {
      window.evil_833 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  