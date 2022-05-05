
  describe("some-evil-spec=504", () => {
    it("evil-block-504", () => {
      window.evil_504 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  