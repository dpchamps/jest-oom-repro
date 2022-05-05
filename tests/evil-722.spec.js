
  describe("some-evil-spec=722", () => {
    it("evil-block-722", () => {
      window.evil_722 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  