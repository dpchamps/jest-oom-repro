
  describe("some-evil-spec=487", () => {
    it("evil-block-487", () => {
      window.evil_487 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  