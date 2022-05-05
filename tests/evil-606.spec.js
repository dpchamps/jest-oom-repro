
  describe("some-evil-spec=606", () => {
    it("evil-block-606", () => {
      window.evil_606 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  