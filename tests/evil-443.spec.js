
  describe("some-evil-spec=443", () => {
    it("evil-block-443", () => {
      window.evil_443 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  