
  describe("some-evil-spec=961", () => {
    it("evil-block-961", () => {
      window.evil_961 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  