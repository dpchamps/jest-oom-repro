
  describe("some-evil-spec=775", () => {
    it("evil-block-775", () => {
      window.evil_775 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  