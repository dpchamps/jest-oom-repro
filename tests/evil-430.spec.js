
  describe("some-evil-spec=430", () => {
    it("evil-block-430", () => {
      window.evil_430 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  