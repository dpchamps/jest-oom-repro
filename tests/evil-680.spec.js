
  describe("some-evil-spec=680", () => {
    it("evil-block-680", () => {
      window.evil_680 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  