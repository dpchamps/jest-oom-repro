
  describe("some-evil-spec=422", () => {
    it("evil-block-422", () => {
      window.evil_422 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  