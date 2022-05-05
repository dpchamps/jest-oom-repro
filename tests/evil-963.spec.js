
  describe("some-evil-spec=963", () => {
    it("evil-block-963", () => {
      window.evil_963 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  