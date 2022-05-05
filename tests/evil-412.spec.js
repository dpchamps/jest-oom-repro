
  describe("some-evil-spec=412", () => {
    it("evil-block-412", () => {
      window.evil_412 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  