
  describe("some-evil-spec=862", () => {
    it("evil-block-862", () => {
      window.evil_862 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  