
  describe("some-evil-spec=578", () => {
    it("evil-block-578", () => {
      window.evil_578 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  