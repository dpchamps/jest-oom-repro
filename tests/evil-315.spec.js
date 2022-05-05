
  describe("some-evil-spec=315", () => {
    it("evil-block-315", () => {
      window.evil_315 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  