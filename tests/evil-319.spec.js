
  describe("some-evil-spec=319", () => {
    it("evil-block-319", () => {
      window.evil_319 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  