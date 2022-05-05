
  describe("some-evil-spec=437", () => {
    it("evil-block-437", () => {
      window.evil_437 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  